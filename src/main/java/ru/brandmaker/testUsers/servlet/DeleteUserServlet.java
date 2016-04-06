package ru.brandmaker.testUsers.servlet;

import ru.brandmaker.testUsers.service.DatabaseBean;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/delete")
public class DeleteUserServlet extends HttpServlet {
    @EJB
    private DatabaseBean databaseBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        if(req.getParameter("id") != null && !"".equals(req.getParameter("id"))){
            int id = Integer.valueOf(req.getParameter("id"));
            databaseBean.delete(id);
        }
        resp.sendRedirect("list");
    }
}
