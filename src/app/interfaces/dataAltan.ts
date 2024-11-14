export interface dataAltan {
    id:number,          // Identificar de BD
    idAltan:string,     // Identificador de Cliente Altán
    idIMSI1:string,     // International Mobile Subscriber Identity
    idIMSI2?:string,    // International Mobile Subscriber Identity rb1
    idIMSI3?:string,    // International Mobile Subscriber Identity rb2
    idICCID:string,     // International Circuit Card (SIM) ID
    idMSISDN:string,    // Mobile Station International Subscriber Directory Number
    idPIN?:string,       // Personal Identification Number
    idPUK?:string,       // Personal Unlocking Key
    serie?:string,       // Lote de generación en BSS Altán
    producto:string     // HBB/MOV/MIFI/IoT
}