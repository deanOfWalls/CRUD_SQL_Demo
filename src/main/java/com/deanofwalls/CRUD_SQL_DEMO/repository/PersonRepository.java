package com.deanofwalls.CRUD_SQL_DEMO.repository;


import com.deanofwalls.CRUD_SQL_DEMO.model.PersonModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends CrudRepository<PersonModel, Long> {

}
