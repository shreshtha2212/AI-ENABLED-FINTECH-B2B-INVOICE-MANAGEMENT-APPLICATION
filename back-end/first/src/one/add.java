package one;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class add
 */
@WebServlet("/add")
public class add extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public add() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		try {
			
			HashMap<Object,Object> Response = new HashMap<Object,Object>();
			 String business_code = request.getParameter("business_code");
				long cust_number = Integer.parseInt(request.getParameter("cust_number"));
				String clear_date=request.getParameter("clear_date");
				long buisness_year=Integer.parseInt(request.getParameter("buisness_year"));
				long doc_id=Integer.parseInt(request.getParameter("doc_id"));
				String posting_date=request.getParameter("posting_date");
				String document_create_date=request.getParameter("document_create_date");
				
				String due_in_date=request.getParameter("due_in_date");
				String invoice_currency=request.getParameter("invoice_currency");
				String document_type=request.getParameter("document_type");
				long posting_id=Integer.parseInt(request.getParameter("posting_id"));
				
				double total_open_amount=Double.parseDouble(request.getParameter("total_open_amount"));
				String baseline_create_date=request.getParameter("baseline_create_date");
				String cust_payment_terms=request.getParameter("cust_payment_terms");
				long invoice_id=Integer.parseInt(request.getParameter("invoice_id"));
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost/grey_goose?" + "user=root&password=admin");
				String sql="insert into winter_internship (business_code,cust_number,clear_date, buisness_year,doc_id,posting_date ,document_create_date ,due_in_date , invoice_currency , document_type , posting_id , total_open_amount , baseline_create_date,cust_payment_terms ,invoice_id  ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?))";
				PreparedStatement statement = con.prepareStatement(sql);
			statement.setString(1, business_code);
			statement.setLong(2, cust_number);
			statement.setString(3, clear_date);
			statement.setLong(4, buisness_year);
			statement.setLong(5, doc_id);
			statement.setString(6, posting_date);
			statement.setString(7, document_create_date);
			
			statement.setString(8, due_in_date);
			statement.setString(9,invoice_currency);
			statement.setString(10, document_type);
			statement.setLong(11, posting_id);
		
			statement.setDouble(12, total_open_amount);
			statement.setString(13, baseline_create_date);
			statement.setString(14, cust_payment_terms);
			statement.setLong(15, invoice_id);
			if(statement.executeUpdate()>0) {
				Response.put("insert",true);
			}else {
				Response.put("insert",false);
			}
			Gson gson=new Gson();
			response.setHeader("Access-Control-Allow-Origin", "*");
			String JSONresponse = gson.toJson(Response);
			response.getWriter().append(JSONresponse);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}