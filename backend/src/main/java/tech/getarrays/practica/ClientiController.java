package tech.getarrays.practica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.practica.domain.Clienti;
import tech.getarrays.practica.service.ClientiService;

import java.util.List;

@RestController
@RequestMapping("/clienti")
public class ClientiController {
    private final ClientiService clientiService;

    @Autowired
    public ClientiController(ClientiService clientiService) {
        this.clientiService = clientiService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Clienti>> getAllClienti() {
        List<Clienti> clienti = ClientiService.findAllClienti();
        return new ResponseEntity<>(clienti, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Clienti> addClienti(@RequestBody Clienti client) {
        Clienti newClient = ClientiService.addClienti(client);
        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Clienti> updateClienti(@RequestBody Clienti client) {
        Clienti updateClient = ClientiService.updateClienti(client);
        return new ResponseEntity<>(updateClient, HttpStatus.CREATED);
    }

    @DeleteMapping("/update/{id}")
    public ResponseEntity<Clienti> deleteClienti(@PathVariable("id") int id) {
        ClientiService.deleteClienti(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
