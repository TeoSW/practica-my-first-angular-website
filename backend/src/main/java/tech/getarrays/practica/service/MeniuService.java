package tech.getarrays.practica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.practica.domain.Meniu;
import tech.getarrays.practica.repo.MeniuRepo;

import java.util.List;

@Service
public class MeniuService {
    private static MeniuRepo meniuRepo = null;

    @Autowired
    public MeniuService(MeniuRepo meniuRepo) {
        this.meniuRepo = meniuRepo;
    }

    public static List<Meniu> findByNume(String numeProdus) {
        return meniuRepo.findByNumeProdus(numeProdus);
    }
}
