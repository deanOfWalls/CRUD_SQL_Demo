package com.deanofwalls.CRUD_SQL_DEMO.config;

import com.deanofwalls.CRUD_SQL_DEMO.model.PersonModel;
import com.deanofwalls.CRUD_SQL_DEMO.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.Arrays;

@Configuration
public class PersonConfig {
    @Autowired
    private PersonRepository repository;
//    @PostConstruct
//    public void setup(){
//        PersonModel person1 = new PersonModel();
//        person1.setFirstName("Dean");
//        person1.setLastName("Walls");
//        person1.setBirthDate(LocalDate.of(1999,9,9));
//
//        PersonModel person2 = new PersonModel();
//        person2.setFirstName("Andre");
//        person2.setLastName("Davis");
//        person2.setBirthDate(LocalDate.of(2000,8,8));
//
//        repository.saveAll(Arrays.asList(
//                person1,
//                person2
//        ));
//    }
}
