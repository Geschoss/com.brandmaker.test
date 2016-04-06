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
import java.util.List;

@WebServlet("/list")
public class GetAllUsersServlet extends HttpServlet {

    @EJB
    private DatabaseBean databaseBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        List<UsersEntity> allUser = databaseBean.getAll();

        req.setAttribute("users", allUser);

        req.getRequestDispatcher("/list.jsp").forward(req, resp);

    }
}
