package tech.getarrays.practica.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.practica.domain.Meniu;

import java.util.List;

public interface MeniuRepo extends JpaRepository<Meniu, Integer> {
    List<Meniu> findByNumeProdus(String numeProdus);
}
