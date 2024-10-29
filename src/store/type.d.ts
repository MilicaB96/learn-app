type role = 'student' | 'trainer';

export type UserType = {
	id?: string;
	firstName: string;
	lastName: string;
	username?: string;
	email: string;
	photo?: string;
	password?: string;
	generatedPassword?: string;
	isActive?: boolean;
	role: string;
	dateOfBirth?: string;
	address?: string;
	specialization?: string;
	errors: ?any;
	pending?: boolean;
	isAuth?: boolean;
	flag: boolean;
	specializations: any;
	myTrainers: any;
	myStudents: any;
	allTrainers: any;
};
