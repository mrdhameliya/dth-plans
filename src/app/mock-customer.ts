import { Customer } from './models/customer.model';
import { SecurityQuestion } from './models/security-questions.model';

export const CUSTOMER: Customer[] = [
    {
        customerId: 1,
        vcNumber: 351135113333,
        mobileNumber: 9879639512,
        email: 'alex@gmail.com',
        alternateMobileNumber: 9058047855,
        password: '987987987k',
        confirmPassword: '987987987k',
        securityQuestion: SecurityQuestion[0],
        answer: 'BMW'
    },
];
