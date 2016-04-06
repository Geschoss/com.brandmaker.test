package ru.brandmaker.testUsers.service;

import ru.brandmaker.testUsers.dao.UsersEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


import java.util.List;

@Path("service")
@Stateless
public class DatabaseBean {

    @PersistenceContext(unitName = "DEVMODE")
    private EntityManager em;


    public UsersEntity add(UsersEntity user){
        return em.merge(user);
    }

    public void update(UsersEntity user){
        add(user);
    }


    @GET
    @Path("/getUser/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public UsersEntity get(@PathParam("id") int id){
        return em.find(UsersEntity.class, id);
    }

    @GET
    @Path("/deleteUser/{id}")
    public void delete(@PathParam("id") int id){
        em.remove(get(id));
    }


    @GET
    @Path("/getAllUsers")
    @Produces(MediaType.APPLICATION_JSON)
    public List<UsersEntity> getAll(){
        TypedQuery<UsersEntity> namedQuery = em.createNamedQuery("UsersEntity.getAll", UsersEntity.class);
        return namedQuery.getResultList();
    }

}
