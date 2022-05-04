package one;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


/**
 * Servlet implementation class DataLoading
 */
@WebServlet("/DataLoading")
public class DataLoading extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DataLoading() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		HashMap<Object, Object>Response=new HashMap<Object,Object>();
		ArrayList<rec> inv= new ArrayList<rec>(); 

	try {
		
		Class.forName("com.mysql.cj.jdbc.Driver");

		Connection con = DriverManager.getConnection("jdbc:mysql://localhost/grey_goose?" + "user=root&password=admin");
		PreparedStatement ps= con.prepareStatement("select sl_no, business_code, cust_number, clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id from winter_internship limit 500 ");
		
		ResultSet rs = ps.executeQuery();

	while(rs.next())
	{
		rec GT = new rec(rs.getLong("sl_no"),rs.getString("business_code"),rs.getLong("cust_number"),rs.getString("clear_date"),rs.getLong("buisness_year"),rs.getLong("doc_id"),rs.getString("posting_date"),rs.getString("document_create_date"),rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),rs.getLong("posting_id"),rs.getDouble("total_open_amount"),rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),rs.getLong("invoice_id"));
        inv.add(GT);
	}

	Response.put("wt",inv);
	}catch(Exception e) {
		e.printStackTrace();
	}

	Gson gson=new Gson();
	String jsonResponse=gson.toJson(Response);
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.getWriter().append(jsonResponse);
	}


	/**
	* @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	*/
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}