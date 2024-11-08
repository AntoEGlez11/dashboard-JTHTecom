export interface Usuario {
    id: number;
    uuid: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    password: string;
    dateOfBirth?: string;
    phoneNumber?: string;
    createdAt: string;
    updatedAt?: string;
    isActive: boolean;
    roles: string[];
  }