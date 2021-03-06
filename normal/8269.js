	 describe("Event Bus Suite", function () {
		 var context,
             system,
			 objEventBus;
			 
		beforeEach(function (){
			system = new dijon.System(); 				
			system.mapValue("system", system); 				
			system.mapOutlet("system"); 				
			context = new Dash.di.DashContext(); 				
			system.injectInto(context); 				
			objEventBus = system.getObject('eventBus');
		});
		
		
		it("Event Bus Suite - Dispatch event with true default prevented",function(){
			var event = {};
			event.type = "updateend";
			event.defaultPrevented = true;
			var result = objEventBus.dispatchEvent(event);
			expect(result).toBe(false);
		});
		
		it("Event Bus Suite - Dispatch event with false default prevented",function(){
			var event = {};
			event.type = "updateend";
			event.defaultPrevented = false;
			var result = objEventBus.dispatchEvent(event);
			expect(result).toBeTruthy();
		});
	});	 
