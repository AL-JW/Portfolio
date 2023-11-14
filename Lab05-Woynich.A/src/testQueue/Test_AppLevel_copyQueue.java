package testQueue;

import static org.junit.Assert.*;
//import junit.framework.Assert;
//import org.junit.After;
//import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import ApplicationLevelMethods.Methods;

import queuePackage.LinkedUnbndQueue;

/* Tests of static method: copyQueue
 *   test for a null reference; the copy should also be a null reference
 *   test an empty queue
 *   test queue with one element
 *   test queue with many elements
 */

public class Test_AppLevel_copyQueue {

	LinkedUnbndQueue<String> q1, q2;
	
	// toggle to true to turn on console output in this test class
	boolean consoleOut = false; 

	@Before
	public void setUp() throws Exception {	
		
		q1 = new LinkedUnbndQueue<String>();
	
	}

	@Test
	public void test_null_reference() {
		//CommentedOut @Before to test a null queue
		q2 = Methods.copyQueue(q1);
		assertEquals(Methods.showQueue(q1),Methods.showQueue(q2));
	}
	
	@Test
	public void test_empty_Queue() {
		
		q2 = Methods.copyQueue(q1);
		assertEquals(Methods.showQueue(q1),Methods.showQueue(q1));		
	}
	
	@Test
	public void test_queue_with_one_element() {
		q1.enqueue("OneElement");
		q2 = Methods.copyQueue(q1);
		assertEquals("Front|  OneElement |Rear",Methods.showQueue(q2));
	}	

	@Test
	public void test_queue_with_many_elements() {
		q1.enqueue("OneElement"); q1.enqueue("TwoElements"); q1.enqueue("ThreeElements"); q1.enqueue("FourElements");
		q2 = Methods.copyQueue(q1);
		assertEquals("Front|  OneElement TwoElements ThreeElements FourElements |Rear",Methods.showQueue(q2));
	}
}
