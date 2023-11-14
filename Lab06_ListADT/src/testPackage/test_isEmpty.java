package testPackage;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import junit.framework.Assert;
import lists.ArrayUnsortedList;

class test_isEmpty {

	ArrayUnsortedList list;
	
	@BeforeEach
	public void setUp() throws Exception {
		
		list = new ArrayUnsortedList<Integer>(5);
	}
	
	
	@Test
	void test_NoElements() {
		assertTrue(list.isEmpty());
	}

}
