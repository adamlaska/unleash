import { Request, Response } from 'express';
import Controller from '../controller';
import { UPDATE_APPLICATION } from '../../types/permissions';
import { IUnleashConfig } from '../../types/option';
import { IUnleashServices } from '../../types/services';
import { Logger } from '../../logger';
import ClientMetricsService from '../../services/client-metrics';

class MetricsController extends Controller {
    private logger: Logger;

    private metrics: ClientMetricsService;

    constructor(
        config: IUnleashConfig,
        {
            clientMetricsService,
        }: Pick<IUnleashServices, 'clientMetricsService'>,
    ) {
        super(config);
        this.logger = config.getLogger('/admin-api/metrics.ts');

        this.metrics = clientMetricsService;

        // deprecated routes
        this.get('/seen-toggles', this.deprecated);
        this.get('/seen-apps', this.deprecated);
        this.get('/feature-toggles', this.deprecated);
        this.get('/feature-toggles/:name', this.deprecated);

        // in use
        this.post(
            '/applications/:appName',
            this.createApplication,
            UPDATE_APPLICATION,
        );
        this.delete(
            '/applications/:appName',
            this.deleteApplication,
            UPDATE_APPLICATION,
        );
        this.get('/applications/', this.getApplications);
        this.get('/applications/:appName', this.getApplication);
    }

    async deprecated(req: Request, res: Response): Promise<void> {
        res.status(410).json({
            lastHour: {},
            lastMinute: {},
            maturity: 'deprecated',
        });
    }

    async deleteApplication(req: Request, res: Response): Promise<void> {
        const { appName } = req.params;

        await this.metrics.deleteApplication(appName);
        res.status(200).end();
    }

    async createApplication(req: Request, res: Response): Promise<void> {
        const input = { ...req.body, appName: req.params.appName };
        await this.metrics.createApplication(input);
        res.status(202).end();
    }

    async getApplications(req: Request, res: Response): Promise<void> {
        const query = req.query.strategyName
            ? { strategyName: req.query.strategyName as string }
            : {};
        const applications = await this.metrics.getApplications(query);
        res.json({ applications });
    }

    async getApplication(req: Request, res: Response): Promise<void> {
        const { appName } = req.params;

        const appDetails = await this.metrics.getApplication(appName);
        res.json(appDetails);
    }
}
export default MetricsController;
