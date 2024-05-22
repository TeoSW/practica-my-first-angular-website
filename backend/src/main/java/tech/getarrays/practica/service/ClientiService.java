package tech.getarrays.practica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.practica.domain.Clienti;
import tech.getarrays.practica.repo.ClientiRepo;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
public class ClientiService {
    private static ClientiRepo clientiRepo = null;

    @Autowired //pt service classes
    public ClientiService(ClientiRepo clientiRepo) {
        this.clientiRepo = clientiRepo;
    }


    public static Clienti addClienti(Clienti clienti) {
        Random rand = new Random();
        int randomNumber = rand.nextInt(101);
        clienti.setId(randomNumber); //set random id code
        clientiRepo.save(clienti);
        Clienti x= clientiRepo.findClientiById(clienti.getId()).getFirst();
        return x;
    }

    public static List<Clienti> findAllClienti(){
        return clientiRepo.findAll();

    }

    public static Clienti updateClienti(Clienti clienti){
        return clientiRepo.save(clienti);
    }

    public static void deleteClienti(int id){
        clientiRepo.deleteById(id);
    }
}
