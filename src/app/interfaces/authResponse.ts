export interface authResponse {
    password: string;
    email: string;
    token:string;   // token de JWT
    rol: string;    // rol de usuario (admin, altanUser, )
}