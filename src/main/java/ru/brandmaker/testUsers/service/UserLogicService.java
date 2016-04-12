package ru.brandmaker.testUsers.service;

import ru.brandmaker.testUsers.dao.ExtResult;
import ru.brandmaker.testUsers.dao.UsersEntity;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.Date;
import java.util.Calendar;


@Path("service")
@Stateless
public class UserLogicService {

    @EJB
    private DatabaseBean databaseBean;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ExtResult getAll(){
        return new ExtResult(true, databaseBean.getUsers());
    }


    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public ExtResult add(UsersEntity user){
        //fix
        //date == null??
        System.out.println("POST-" + user.toString());
        java.sql.Date timeNow = new Date(Calendar.getInstance().getTimeInMillis());
        user.setBirthday(timeNow);
        //fix
        databaseBean.add(user);
        return new ExtResult(true, user);
    }

    @DELETE
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") int id){
        databaseBean.delete(id);
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void update(UsersEntity user){
        databaseBean.update(user);
    }
}
