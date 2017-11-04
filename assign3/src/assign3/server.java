package assign3;

import java.io.IOException;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class server {
	public static void main(String args[]) throws IOException
	{
		int number, temp;
		ServerSocket s1=new ServerSocket(1342); //which port process is running
		Socket ss = s1.accept(); //accept clients message
		Scanner sc = new Scanner(ss.getInputStream()); //check what client is sending
		number = sc.nextInt(); 
		
		temp = number * 2;  //manipulate message
		
		PrintStream p = new PrintStream(ss.getOutputStream());
		p.println(temp); //send new message back
		
		
		
			
	}
}
