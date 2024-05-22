package tech.getarrays.practica.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.practica.domain.Clienti;

import java.util.List;

public interface ClientiRepo extends JpaRepository<Clienti, Integer> {
    void deleteById(int id);
    List<Clienti>findClientiById(int id);
}
