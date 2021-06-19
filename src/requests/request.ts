import { User, OPO } from '../user';

export type RequestStatus = 'APPROVED' | 'PENDING' | 'DENIFED';

export interface Request {
	status: RequestStatus;
	requester: User;
	vetter: OPO;
	requestDate: Date;
}