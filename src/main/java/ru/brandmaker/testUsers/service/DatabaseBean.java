package ru.brandmaker.testUsers.service;

import ru.brandmaker.testUsers.dao.UsersEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.*;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("service")
@Stateless
public class DatabaseBean {

    @PersistenceContext(unitName = "DEVMODE")
    private EntityManager em;

    @POST
    @Path("/add")
    public UsersEntity add(UsersEntity user){
        return em.merge(user);
    }

    @PUT
    @Path("/update")
    public void update(UsersEntity user){
        add(user);
    }


    @GET
    @Path("/get/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public UsersEntity get(@PathParam("id") int id){
        return em.find(UsersEntity.class, id);
    }

    @DELETE
    @Path("/delete/{id}")
    public void delete(@PathParam("id") int id){
        em.remove(get(id));
    }


    @GET
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String, Object> getAll(){
        TypedQuery<UsersEntity> namedQuery = em.createNamedQuery("UsersEntity.getAll", UsersEntity.class);
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("success",true);
        result.put("data",namedQuery.getResultList());

        return result;
    }

}
