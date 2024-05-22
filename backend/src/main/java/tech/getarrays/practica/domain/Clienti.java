package tech.getarrays.practica.domain;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity //class is mapped to any db
public class Clienti implements Serializable {
    @Id //primary key
    ///  @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private int id_Client;
    private String nume;
    private int nr_persoane;
    private String ora_rezervare;

    public Clienti() {
        this.id_Client = 0;
        this.nume = "";
        this.nr_persoane = 0;
        this.ora_rezervare = "";
    }

    public Clienti(int id_Client, String nume, String ora_rezervare, int nr_persoane) {
        this.id_Client = id_Client;
        this.ora_rezervare = ora_rezervare;
        this.nr_persoane = nr_persoane;
        this.nume = nume;
    }

    public String getOra() {
        return ora_rezervare;
    }

    public void setOra(String ora_rezervare) {
        this.ora_rezervare = ora_rezervare;
    }

    public int getNrPers() {
        return nr_persoane;
    }

    public void setNrPers(int nr_persoane) {
        this.nr_persoane = nr_persoane;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public int getId() {
        return id_Client;
    }

    public void setId(int id_Client) {
        this.id_Client = id_Client;
    }

}
