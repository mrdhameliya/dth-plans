export class Customer {
    customerId: number;
    vcNumber: number;
    mobileNumber: number;
    email: string;
    alternateMobileNumber: number;
    password: string;
    confirmPassword: string;
    securityQuestion: any;
    answer: string;
}

export interface Customer {
    customerId: number;
    vcNumber: number;
    mobileNumber: number;
    email: string;
    alternateMobileNumber: number;
    password: string;
    confirmPassword: string;
    securityQuestion: any;
    answer: string;
}
