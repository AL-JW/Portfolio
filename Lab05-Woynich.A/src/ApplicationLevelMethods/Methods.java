package ApplicationLevelMethods;

import queuePackage.LinkedUnbndQueue;

public class Methods {

		// make a copy of orig queue, leaving it unchanged
	public static LinkedUnbndQueue<String> copyQueue(LinkedUnbndQueue<String> origQ) 
	{
		//Precondition: Needs to have a queue to attempt to copy
		//Postcondition: Returns a copy of the inputed queue
		// copyQueue code goes here
		LinkedUnbndQueue<String> copyQ = new LinkedUnbndQueue<String>();
		LinkedUnbndQueue<String> tempQ = new LinkedUnbndQueue<String>();
		String copyStore = "";
		
		//for if the queue is null or empty
		if(origQ == null) {
			return null;
		}
		//using loops to copy origQ into copyQ
		else 
		{
		
			while(!origQ.isEmpty()) 
			{
			copyStore = origQ.dequeue();
			copyQ.enqueue(copyStore);

			}	
			while (!tempQ.isEmpty())
			{
				copyStore = tempQ.dequeue();
				origQ.enqueue(copyStore);
			}
		}
		return copyQ;
	}

		// return a count of the number of elements of 
		//the orig queue, leaving it unchanged
	public static int count(LinkedUnbndQueue<String> origQ) {
		//Precondition: Need to have a queue to call the method with
		//Postcondition: Returns the number of elements in the queue
		// Loops were explained and code was given for this method by the instructor
		//count the values in the origQ, storing them in tempQ
		LinkedUnbndQueue<String> tempQ = new LinkedUnbndQueue<String>();
		int count = 0;
		String s = "";
		
		if(origQ == null)
			return 0;
		else
		{
		while (!origQ.isEmpty()) 
		{
			s = origQ.dequeue();
			tempQ.enqueue(s);
			count++;
		}
		
		while (!tempQ.isEmpty())
		{
			s = tempQ.dequeue();
			origQ.enqueue(s);
		}
		// count code goes here
		return count;
	    }
	}

		// return a nicely formatted string 
		//representing the queue, leaving it unchanged
	public static String showQueue(LinkedUnbndQueue<String> origQ) {
		//Precondition: Needs a queue to call this method
		//Post condition: Returns a string that shows what 
		//is in the queue like the toStringMethod but for queues
		LinkedUnbndQueue<String> tempQ = new LinkedUnbndQueue<String>();
		String niceString = "";
		String s = "";
		String empty = "Empty Queue";
		if(origQ == null)
			return empty;
		else
		{
		while (!origQ.isEmpty()) 
		{
			s = s + " " + origQ.dequeue();
			tempQ.enqueue(s);
			
		}
		niceString ="Front| " + s + " |Rear";
		// count code goes here
		return niceString;
	    }
	}
}
