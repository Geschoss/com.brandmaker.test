package ru.brandmaker.testUsers.service;

import ru.brandmaker.testUsers.dao.UsersEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class DatabaseBean {

    @PersistenceContext(unitName = "DEVMODE")
    private EntityManager manager;


    public List<UsersEntity> getUsers(){
        TypedQuery<UsersEntity> namedQuery = manager.createNamedQuery("UsersEntity.getAll", UsersEntity.class);
        return namedQuery.getResultList();
    }


    public void add(UsersEntity user){
        manager.persist(user);
    }

    public void update(UsersEntity user){
        manager.merge(user);
    }

    public void delete(int id){
        manager.remove(manager.find(UsersEntity.class, id));
    }




}
