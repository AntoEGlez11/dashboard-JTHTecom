export interface dataAltan {
    id:number,          // Identificar de BD
    idAltan:number,     // Identificador de Cliente Altán
    idIMSI1:number,     // International Mobile Subscriber Identity
    idIMSI2?:number,    // International Mobile Subscriber Identity rb1
    idIMSI3?:number,    // International Mobile Subscriber Identity rb2
    idICCID:number,     // International Circuit Card (SIM) ID
    idMSISDN:number,    // Mobile Station International Subscriber Directory Number
    idPIN?:number,       // Personal Identification Number
    idPUK?:number,       // Personal Unlocking Key
    serie?:number,       // Lote de generación en BSS Altán
    producto:string     // HBB/MOV/MIFI/IoT
}