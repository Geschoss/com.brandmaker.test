import org.hibernate.Query;
import org.hibernate.Session;
import org.junit.Test;
import ru.brandmaker.testUsers.dao.UsersEntity;
import ru.brandmaker.testUsers.service.HibernateSessionFactory;

import java.util.List;

public class HibernateTest {


    @Test
    public void testAdd() {

        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();

        UsersEntity contactEntity = new UsersEntity();
        contactEntity.setYearOfBirth(1989);
        contactEntity.setFirstName("Pavel");
        contactEntity.setLastName("Kol");

        session.save(contactEntity);

        session.getTransaction().commit();
        session.close();

    }

    @Test
    public void testSelect(){

        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        Query query = session.createQuery("from UsersEntity");
        List users = query.list();
        for(Object user : users) {

            System.out.println(user.toString());
        }
        session.close();

    }

    @Test
    public void testDelete(){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        Query query = session.createQuery("delete UsersEntity where id = :ID");
        session.beginTransaction();

        query.setParameter("ID", 2);
        int result = query.executeUpdate();
        System.out.println(result);

        session.getTransaction().commit();
        session.close();
    }
}

