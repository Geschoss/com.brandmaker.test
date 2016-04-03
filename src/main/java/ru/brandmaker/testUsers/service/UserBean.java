package ru.brandmaker.testUsers.service;

import ru.brandmaker.testUsers.dao.UsersEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class UserBean {
    @PersistenceContext(unitName = "DEVMODE")
    private EntityManager em;


    public UsersEntity add(UsersEntity user){
        return em.merge(user);
    }


    public UsersEntity get(int id){
        return em.find(UsersEntity.class, id);
    }


    public void update(UsersEntity user){
        add(user);
    }


    public void delete(int id){
        em.remove(get(id));
    }


    public List<UsersEntity> getAll(){
        TypedQuery<UsersEntity> namedQuery = em.createNamedQuery("UsersEntity.getAll", UsersEntity.class);
        return namedQuery.getResultList();
    }

}
