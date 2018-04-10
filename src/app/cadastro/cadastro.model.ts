
import { HelperService } from '../shared/utils/helper.service'

export class CadastroModel {

    public nome: string;
    public email: string;
    public tempo: string;
    public data_hora: any;
    public ip: any;

    constructor(nome: string, email: string, tempo: string) {
        this.nome = nome;
        this.email = email;
        this.tempo = tempo;
        this.data_hora = HelperService.getData();
        this.ip = HelperService.getIp();

    }
    
}