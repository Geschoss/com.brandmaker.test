package ru.brandmaker.testUsers.servlet;

import ru.brandmaker.testUsers.dao.UsersEntity;
import ru.brandmaker.testUsers.service.DatabaseBean;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/add")
public class AddAndEditUserServlet extends HttpServlet {
    @EJB
    private DatabaseBean databaseBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html");
        req.setCharacterEncoding("UTF-8");

        if (req.getParameter("edit") != null) {
            int id = Integer.valueOf(req.getParameter("edit"));
            UsersEntity user = databaseBean.get(id);
            req.setAttribute("user", user);
        }

        req.getRequestDispatcher("/add.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html");
        req.setCharacterEncoding("UTF-8");

        String firstName = req.getParameter("firstName");
        String lastName = req.getParameter("lastName");
        int yearOfBirth = Integer.valueOf(req.getParameter("yearOfBirth"));

        if (!"".equals(req.getParameter("id"))) {
            int id = Integer.valueOf(req.getParameter("id"));
            UsersEntity user = databaseBean.get(id);
            user.setYearOfBirth(yearOfBirth);
            user.setLastName(lastName);
            user.setFirstName(firstName);
            databaseBean.update(user);
        } else {
            databaseBean.add(new UsersEntity(firstName, lastName, yearOfBirth));
        }

        resp.sendRedirect("list");
    }
}
