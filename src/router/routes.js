import Home from '../components/home/Home.vue';
import Historia from '../components/Historia.vue'
import Missao from '../components/Missao.vue'
import Estatuto from '../components/Estatuto.vue'
import Contato from '../components/Contato.vue'
import Diretoria from '../components/Diretoria.vue'
import Agenda from '../components/Agenda.vue'
import ImportanciaBeneficios from '../components/ImportanciaBeneficios.vue'
import Filiacao from '../components/Filiacao.vue'

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/Historia', name: 'Historia', component: Historia },
    { path: '/Missao', name:'Missao', component: Missao},
    { path: '/Estatuto', name:'Estatuto', component: Estatuto},
    { path: '/Contato', name: 'Contato', component: Contato },
    { path: '/Diretoria', name: 'Diretoria', component: Diretoria},
    { path: '/Agenda', name: 'Agenda', component: Agenda},
    { path: '/ImportanciaBeneficios', name:'ImportanciaBeneficios', component: ImportanciaBeneficios},
    { path: '/Filiacao', name: 'Filiacao', component: Filiacao},
];
