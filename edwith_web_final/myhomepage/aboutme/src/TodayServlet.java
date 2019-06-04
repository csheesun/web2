import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TodayServlet
 */
@WebServlet("/today")
public class TodayServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TodayServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		
		out.println("<head>");
		out.println("<meta charset=\"utf-8\">");
		out.println("<style>");
		out.println("div {");    
		out.println("font-size:400%;");
		out.println("width: 1000px;"); /* 가로 정렬 : 너비를 반드시 지정 */ 
		out.println("margin: 0 auto;"); /* 가로정렬 */ 
		out.println("line-height: 1000px;"); /* 세로정렬: 박스 안의 텍스트가 한 줄일 경우에만 유효하다. 박스의 높이값과 line-height를 동일하게 부여. */
		out.println("}"); 
		out.println("</style>"); 
		out.println("</head>");
		
		out.println("<body>");
		out.println("<a href=http://localhost:8080/aboutme/index.html>메인화면</a>");
		LocalDateTime currentDateTime = LocalDateTime.now();
		out.println("<div>"+"현재시간: "+currentDateTime+"</div>");
		out.println("</body>");
		out.println("</html>");
		out.close();
		
	}
}
