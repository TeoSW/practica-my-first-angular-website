package tech.getarrays.practica.domain;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity //class is mapped to any db
public class Meniu implements Serializable {
    @Id //primary key
    ///  @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private int id_produs;
    private String numeProdus;

    public Meniu() {
        this.id_produs = 0;
        this.numeProdus = "";
    }
    public Meniu(int id_produs, String numeProdus) {
        this.id_produs = id_produs;
        this.numeProdus = numeProdus;
    }

    public int getId_produs() {
        return id_produs;
    }

    public void setId_produs(int id_produs) {
        this.id_produs = id_produs;
    }

    public String getNumeProdus() {
        return numeProdus;
    }

    public void setNumeProdus(String numeProdus) {
        this.numeProdus = numeProdus;
    }
}
