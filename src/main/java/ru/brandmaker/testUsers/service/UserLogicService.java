package ru.brandmaker.testUsers.service;

import ru.brandmaker.testUsers.dao.ExtResult;
import ru.brandmaker.testUsers.dao.UsersEntity;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


@Path("service")
@Stateless
public class UserLogicService {

    @EJB
    private DatabaseBean databaseBean;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ExtResult getAll(){
        System.out.println("GET-");
        return new ExtResult(true, databaseBean.getUsers());
    }


    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public ExtResult add(UsersEntity user){
        System.out.println("POST-" + user.toString());
        if (user.getId() == 0)
            databaseBean.add(user);
        else
            databaseBean.update(user);
        return new ExtResult(true, user);
    }

    @DELETE
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") int id){
        System.out.println("DELETE-" + id);
        databaseBean.delete(id);
    }


    @PUT
    public void update(UsersEntity user){
        add(user);
    }

/*

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public UsersEntity get(@PathParam("id") int id){
        return em.find(UsersEntity.class, id);
    }
*/



}
