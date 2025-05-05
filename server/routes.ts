import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { registrationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for registration
  app.post('/api/register', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = registrationSchema.parse(req.body);
      
      // Store the registration
      const registration = await storage.createRegistration(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Registration successful",
        data: registration
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred during registration" 
        });
      }
    }
  });

  // Get all registrations (admin endpoint)
  app.get('/api/registrations', async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.status(200).json({ 
        success: true, 
        data: registrations 
      });
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching registrations" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
