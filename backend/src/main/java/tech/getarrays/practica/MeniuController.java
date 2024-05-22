package tech.getarrays.practica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.getarrays.practica.domain.Meniu;
import tech.getarrays.practica.service.MeniuService;

import java.util.List;

@RestController
@RequestMapping("/meniu")
public class MeniuController {
    private final MeniuService meniuService;

    @Autowired
    public MeniuController(MeniuService meniuService) {
        this.meniuService = meniuService;
    }

    @GetMapping("/{numeProdus}")
    public ResponseEntity<List<Meniu>> getAllMeniu(@PathVariable String numeProdus ) {
        List<Meniu> meniu = MeniuService.findByNume(numeProdus);
        return new ResponseEntity<>(meniu, HttpStatus.OK);
    }


}
