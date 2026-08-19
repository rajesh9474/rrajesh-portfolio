export const PRESET_PROJECTS = [
  {
    id: "proj_food_delivery",
    name: "CraveExpress - Food Delivery",
    category: "Food & Dining",
    badge: "Popular",
    description: "Full-featured food delivery app with live GPS tracking, restaurant listings, order customization, and Stripe payments.",
    icon: "Utensils",
    prompt: "Create a food delivery app with real-time driver tracking, restaurant menus, dish search, cart checkout, and push notifications.",
    architecture: {
      frontend: "Flutter (Dart) / React Native (TypeScript)",
      backend: "Node.js (Express)",
      database: "PostgreSQL with PostGIS for location data",
      auth: "Firebase Auth + OAuth 2.0",
      payments: "Stripe SDK",
      realtime: "WebSockets / Socket.io for driver GPS"
    },
    screens: [
      { id: "home", title: "Explore Restaurants", icon: "Home" },
      { id: "menu", title: "Restaurant Menu", icon: "BookOpen" },
      { id: "cart", title: "Cart & Checkout", icon: "ShoppingBag" },
      { id: "tracking", title: "Live Order Tracker", icon: "MapPin" },
      { id: "profile", title: "User Account", icon: "User" }
    ],
    sampleData: {
      restaurants: [
        { id: 1, name: "Burger Craft & Co", rating: 4.9, time: "20-30 min", deliveryFee: "$1.99", tags: ["Gourmet", "American"], image: "🍔", popularDish: "Truffle Bacon Smash Burger", price: "$14.50" },
        { id: 2, name: "Sakura Ramen House", rating: 4.8, time: "25-35 min", deliveryFee: "$2.49", tags: ["Japanese", "Noodles"], image: "🍜", popularDish: "Tonkotsu Black Garlic Ramen", price: "$16.00" },
        { id: 3, name: "Napoli Artisanal Pizza", rating: 4.9, time: "15-25 min", deliveryFee: "$0.99", tags: ["Italian", "Woodfired"], image: "🍕", popularDish: "Diavola Burrata Pizza", price: "$18.99" },
        { id: 4, name: "Matcha & Acai Garden", rating: 4.7, time: "10-20 min", deliveryFee: "$1.49", tags: ["Healthy", "Smoothies"], image: "🥗", popularDish: "Tropical Superfood Bowl", price: "$12.00" }
      ],
      activeOrder: {
        orderId: "#ORD-98241",
        driverName: "Alex Rivera",
        driverPhone: "+1 (555) 392-1092",
        vehicle: "Silver Honda Civic (Plate: 7XYZ89)",
        eta: "14 mins",
        status: "Driver on the way",
        progress: 65,
        items: [
          { name: "Truffle Bacon Smash Burger", qty: 2, price: "$29.00" },
          { name: "Crispy Sweet Potato Fries", qty: 1, price: "$5.50" },
          { name: "Craft Iced Tea", qty: 2, price: "$6.00" }
        ],
        subtotal: "$40.50",
        tax: "$3.64",
        delivery: "$1.99",
        total: "$46.13"
      }
    },
    databaseSchema: {
      engine: "PostgreSQL 16",
      tables: [
        {
          name: "users",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "email", type: "VARCHAR(255)", unique: true },
            { name: "phone_number", type: "VARCHAR(20)" },
            { name: "default_address_id", type: "UUID", fk: "addresses.id" },
            { name: "created_at", type: "TIMESTAMPTZ" }
          ]
        },
        {
          name: "restaurants",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "name", type: "VARCHAR(255)" },
            { name: "cuisine_type", type: "VARCHAR(100)" },
            { name: "rating", type: "NUMERIC(2,1)" },
            { name: "location", type: "GEOGRAPHY(Point, 4326)" }
          ]
        },
        {
          name: "orders",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "user_id", type: "UUID", fk: "users.id" },
            { name: "driver_id", type: "UUID", fk: "drivers.id" },
            { name: "total_amount", type: "NUMERIC(10,2)" },
            { name: "status", type: "ENUM('PENDING', 'PREPARING', 'ON_THE_WAY', 'DELIVERED')" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/v1/restaurants", desc: "Fetch nearby restaurants based on user geolocation.", status: 200 },
      { method: "POST", path: "/api/v1/orders/checkout", desc: "Create a new food delivery order & charge via Stripe.", status: 201 },
      { method: "GET", path: "/api/v1/orders/:id/track", desc: "Get real-time driver GPS coordinate telemetry.", status: 200 },
      { method: "POST", path: "/api/v1/drivers/location", desc: "Update driver real-time location ping.", status: 200 }
    ],
    codeFiles: [
      {
        path: "lib/main.dart",
        language: "dart",
        framework: "Flutter",
        code: `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const CraveExpressApp());
}

class CraveExpressApp extends StatelessWidget {
  const CraveExpressApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CraveExpress',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        primaryColor: const Color(0xFF6366F1),
        scaffoldBackgroundColor: const Color(0xFF0F172A),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF6366F1),
          secondary: Color(0xFFA855F7),
        ),
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('CraveExpress 🍔', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFF090D16),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.notifications_none)),
          IconButton(onPressed: () {}, icon: const Icon(Icons.shopping_bag_outlined)),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('Delivering to', style: TextStyle(color: Colors.grey, fontSize: 12)),
              Row(
                children: const [
                  Text('742 Evergreen Terrace', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                  Icon(Icons.keyboard_arrow_down, color: Color(0xFF6366F1)),
                ],
              ),
              const SizedBox(height: 20),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Search burgers, sushi, tacos...',
                  prefixIcon: const Icon(Icons.search),
                  filled: true,
                  fillColor: const Color(0xFF1E293B),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                ),
              ),
              const SizedBox(height: 24),
              const Text('Featured Restaurants', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 12),
              _buildRestaurantCard('Burger Craft & Co', '4.9 ★ (20-30 min)', '🍔 gourmet smash burgers', '\$14.50'),
              _buildRestaurantCard('Sakura Ramen', '4.8 ★ (25-35 min)', '🍜 authentic tonkotsu', '\$16.00'),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildRestaurantCard(String name, String meta, String desc, String price) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white10),
      ),
      child: Row(
        children: [
          Container(
            width: 70, height: 70,
            decoration: BoxDecoration(color: const Color(0xFF334155), borderRadius: BorderRadius.circular(12)),
            child: const Center(child: Text('🍔', style: TextStyle(fontSize: 32))),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                Text(meta, style: const TextStyle(color: Color(0xFF6366F1), fontSize: 12)),
                Text(desc, style: const TextStyle(color: Colors.grey, fontSize: 12)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}`
      },
      {
        path: "src/screens/HomeScreen.tsx",
        language: "typescript",
        framework: "React Native",
        code: `import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.subtext}>DELIVER NOW</Text>
          <Text style={styles.locationText}>Downtown Metropolitan Area 📍</Text>
        </View>
        <TouchableOpacity style={styles.cartBtn}>
          <Feather name="shopping-bag" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Feather name="search" size={18} color="#94A3B8" />
        <TextInput 
          style={styles.input} 
          placeholder="Craving burgers, sushi, pizza?"
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  subtext: { color: '#6366F1', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  locationText: { color: '#F8FAFC', fontSize: 16, fontWeight: 'bold' },
  cartBtn: { backgroundColor: '#1E293B', padding: 12, borderRadius: 12 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', borderRadius: 14, paddingHorizontal: 14, height: 48 },
  input: { flex: 1, color: '#F8FAFC', marginLeft: 10 }
});`
      },
      {
        path: "server/routes/api.js",
        language: "javascript",
        framework: "Node.js Express",
        code: `const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET /api/v1/restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const { latitude, longitude, radius = 5 } = req.query;
    const query = \`
      SELECT id, name, cuisine_type, rating, image_url,
             ST_Distance(location, ST_MakePoint($1, $2)::geography) / 1000 AS distance_km
      FROM restaurants
      WHERE ST_DWithin(location, ST_MakePoint($1, $2)::geography, $3 * 1000)
      ORDER BY rating DESC
      LIMIT 20;
    \`;
    const result = await pool.query(query, [longitude, latitude, radius]);
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/v1/orders/checkout
router.post('/orders/checkout', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { userId, restaurantId, items, deliveryAddress, paymentToken } = req.body;
    
    // Calculate total amount
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const orderRes = await client.query(
      \`INSERT INTO orders (user_id, restaurant_id, total_amount, status) VALUES ($1, $2, $3, 'PREPARING') RETURNING id\`,
      [userId, restaurantId, total]
    );

    await client.query('COMMIT');
    res.status(201).json({ success: true, orderId: orderRes.rows[0].id, status: 'PREPARING' });
  } catch (err) {
    await client.query('ROLLBACK');
    res.status(500).json({ success: false, error: err.message });
  } finally {
    client.release();
  }
});

module.exports = router;`
      },
      {
        path: "db/schema.sql",
        language: "sql",
        framework: "PostgreSQL",
        code: `-- Enable PostGIS for real-time location queries
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    phone_number VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE restaurants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    cuisine_type VARCHAR(100),
    rating NUMERIC(2,1) DEFAULT 5.0,
    location GEOGRAPHY(POINT, 4326) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    restaurant_id UUID REFERENCES restaurants(id),
    total_amount NUMERIC(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);`
      }
    ],
    issues: [
      { id: 1, file: "server/routes/api.js", line: 18, severity: "warning", message: "Sanitize SQL parameters for radius query to prevent edge cases." },
      { id: 2, file: "lib/main.dart", line: 42, severity: "info", message: "Use CachedNetworkImage for smooth restaurant image loading." }
    ]
  },

  {
    id: "proj_ecommerce",
    name: "StyleForge - Fashion E-Commerce",
    category: "E-Commerce",
    badge: "Featured",
    description: "Modern apparel store app with augmented reality outfit previews, instant search filters, user reviews, and 1-click checkout.",
    icon: "ShoppingBag",
    prompt: "Build an e-commerce app for clothes with product catalog, size guides, wishlist, order tracking, and Apple Pay / Google Pay.",
    architecture: {
      frontend: "React Native (TypeScript) + Framer Motion",
      backend: "Node.js (Express) + GraphQL API",
      database: "PostgreSQL + Redis Cache",
      auth: "Supabase Auth (JWT)",
      payments: "Stripe + Apple Pay / Google Pay SDK",
      storage: "AWS S3 / Cloudinary for High-Res Images"
    },
    screens: [
      { id: "home", title: "Trends & New Drops", icon: "Sparkles" },
      { id: "catalog", title: "Product Catalog", icon: "Grid" },
      { id: "detail", title: "Product Details", icon: "Eye" },
      { id: "cart", title: "Shopping Bag", icon: "ShoppingBag" },
      { id: "profile", title: "Account & Orders", icon: "User" }
    ],
    sampleData: {
      products: [
        { id: 101, name: "Oversized Cyberpunk Hoodie", price: "$89.00", rating: 4.9, category: "Outerwear", colors: ["#000000", "#6366F1", "#A855F7"], image: "🧥", tag: "Best Seller" },
        { id: 102, name: "Minimalist Neon Sneakers", price: "$129.50", rating: 4.8, category: "Footwear", colors: ["#FFFFFF", "#06B6D4"], image: "👟", tag: "New Drop" },
        { id: 103, name: "Urban Tech Cargo Pants", price: "$74.00", rating: 4.7, category: "Pants", colors: ["#1E293B", "#334155"], image: "👖", tag: "Trending" },
        { id: 104, name: "Holographic Visor Glasses", price: "$45.00", rating: 5.0, category: "Accessories", colors: ["#EC4899", "#38BDF8"], image: "🕶️", tag: "Limited" }
      ],
      cartSummary: {
        itemsCount: 3,
        subtotal: "$292.50",
        shipping: "FREE",
        tax: "$23.40",
        total: "$315.90"
      }
    },
    databaseSchema: {
      engine: "PostgreSQL 16",
      tables: [
        {
          name: "products",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "title", type: "VARCHAR(255)" },
            { name: "price", type: "NUMERIC(10,2)" },
            { name: "stock_quantity", type: "INT" },
            { name: "category_id", type: "UUID", fk: "categories.id" }
          ]
        },
        {
          name: "variants",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "product_id", type: "UUID", fk: "products.id" },
            { name: "size", type: "VARCHAR(10)" },
            { name: "color_hex", type: "VARCHAR(7)" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/v1/products", desc: "Fetch paginated products with category filtering.", status: 200 },
      { method: "GET", path: "/api/v1/products/:id", desc: "Get single product with sizes and stock levels.", status: 200 },
      { method: "POST", path: "/api/v1/cart/checkout", desc: "Process cart order with Stripe PaymentIntent.", status: 201 }
    ],
    codeFiles: [
      {
        path: "src/App.tsx",
        language: "typescript",
        framework: "React Native",
        code: `import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function StyleForgeApp() {
  return (
    <View style={{ flex: 1, backgroundColor: '#090D16' }}>
      <Text style={{ color: '#F8FAFC', fontSize: 24, fontWeight: 'bold', padding: 16 }}>
        StyleForge 🛍️
      </Text>
    </View>
  );
}`
      },
      {
        path: "lib/main.dart",
        language: "dart",
        framework: "Flutter",
        code: `import 'package:flutter/material.dart';

void main() => runApp(const StyleForgeFlutter());

class StyleForgeFlutter extends StatelessWidget {
  const StyleForgeFlutter({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFF0F172A),
        appBar: AppBar(title: const Text('StyleForge Apparel')),
        body: const Center(child: Text('Fashion E-Commerce App', style: TextStyle(color: Colors.white))),
      ),
    );
  }
}`
      }
    ],
    issues: []
  },

  {
    id: "proj_fitness",
    name: "FitPulse AI - Workout & Health Tracker",
    category: "Health & Fitness",
    badge: "AI Powered",
    description: "Smart fitness tracking app with AI workout coach, calorie logging, heart rate analytics, and progress milestones.",
    icon: "Activity",
    prompt: "Create a fitness tracker app with daily workout plans, step counter, meal scanner, progress graphs, and social leaderboards.",
    architecture: {
      frontend: "Flutter (Dart) / Swift iOS Native",
      backend: "Node.js (Express) + Supabase Realtime",
      database: "PostgreSQL + TimescaleDB for time-series biometric data",
      auth: "OAuth 2.0 (Apple / Google Health Connect integration)",
      analytics: "Chart.js / Victory Native"
    },
    screens: [
      { id: "dashboard", title: "Daily Pulse", icon: "Activity" },
      { id: "workouts", title: "AI Routine", icon: "Dumbbell" },
      { id: "nutrition", title: "Macro Log", icon: "PieChart" },
      { id: "analytics", title: "Progress Charts", icon: "TrendingUp" },
      { id: "profile", title: "User Profile", icon: "User" }
    ],
    sampleData: {
      dailyStats: {
        steps: 8420,
        targetSteps: 10000,
        caloriesBurned: 540,
        activeMinutes: 48,
        waterMl: 2100,
        heartRate: "72 BPM"
      },
      workoutPlan: [
        { name: "Incline Bench Press", sets: "4 Sets", reps: "10-12 Reps", weight: "185 lbs", done: true },
        { name: "Barbell Squats", sets: "4 Sets", reps: "8 Reps", weight: "245 lbs", done: true },
        { name: "Cable Flyes", sets: "3 Sets", reps: "15 Reps", weight: "50 lbs", done: false },
        { name: "Core Planks", sets: "3 Sets", reps: "60 secs", weight: "Bodyweight", done: false }
      ]
    },
    databaseSchema: {
      engine: "PostgreSQL 16",
      tables: [
        {
          name: "fitness_logs",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "user_id", type: "UUID", fk: "users.id" },
            { name: "step_count", type: "INT" },
            { name: "calories_burned", type: "NUMERIC(6,2)" },
            { name: "log_date", type: "DATE" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/v1/fitness/daily", desc: "Retrieve daily activity metrics.", status: 200 },
      { method: "POST", path: "/api/v1/fitness/log-workout", desc: "Log a completed exercise session.", status: 201 }
    ],
    codeFiles: [
      {
        path: "lib/main.dart",
        language: "dart",
        framework: "Flutter",
        code: `import 'package:flutter/material.dart';

void main() => runApp(const FitPulseApp());

class FitPulseApp extends StatelessWidget {
  const FitPulseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFF090D16),
        appBar: AppBar(title: const Text('FitPulse AI ⚡')),
        body: const Center(child: Text('Fitness Tracker App', style: TextStyle(color: Colors.white))),
      ),
    );
  }
}`
      }
    ],
    issues: []
  },

  {
    id: "proj_taxi",
    name: "UrbanRide - Taxi Booking Platform",
    category: "Transportation",
    badge: "Enterprise",
    description: "On-demand ride hailing app with live vector maps, fare estimator, driver match algorithm, and multi-tier ride options.",
    icon: "Car",
    prompt: "Build a taxi booking application with driver map locator, trip fare estimator, ride options (Economy, XL, Luxury), and rating system.",
    architecture: {
      frontend: "Flutter (Dart) / React Native",
      backend: "Node.js (Express) + WebSockets",
      database: "PostgreSQL + Redis Geospatial",
      auth: "Firebase Auth with SMS OTP",
      maps: "Google Maps SDK / Mapbox GL"
    },
    screens: [
      { id: "pickup", title: "Book Ride", icon: "MapPin" },
      { id: "ride_select", title: "Select Tier", icon: "Car" },
      { id: "in_transit", title: "Trip Status", icon: "Navigation" },
      { id: "receipt", title: "Fare Details", icon: "FileText" },
      { id: "profile", title: "Passenger Profile", icon: "User" }
    ],
    sampleData: {
      rideTiers: [
        { name: "Urban Economy", eta: "3 min away", price: "$14.20", cap: "4 Seats", icon: "🚗" },
        { name: "Urban Comfort", eta: "5 min away", price: "$19.80", cap: "4 Seats (Newer cars)", icon: "🚘" },
        { name: "Urban XL SUV", eta: "7 min away", price: "$28.50", cap: "6 Seats", icon: "🚙" },
        { name: "Urban Luxury", eta: "4 min away", price: "$42.00", cap: "Black Sedan", icon: "🏎️" }
      ],
      currentTrip: {
        driver: "Marcus Vance",
        rating: 4.98,
        car: "Black Tesla Model 3 (Plate: EV-902-CA)",
        pickup: "742 Market St, Financial District",
        destination: "SFO International Airport, Terminal 2",
        estTime: "22 mins",
        fare: "$28.50"
      }
    },
    databaseSchema: {
      engine: "PostgreSQL 16",
      tables: [
        {
          name: "trips",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "passenger_id", type: "UUID", fk: "users.id" },
            { name: "driver_id", type: "UUID", fk: "drivers.id" },
            { name: "fare_amount", type: "NUMERIC(8,2)" },
            { name: "status", type: "VARCHAR(50)" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "POST", path: "/api/v1/rides/estimate", desc: "Calculate trip distance and fare estimate.", status: 200 },
      { method: "POST", path: "/api/v1/rides/request", desc: "Broadcast ride request to nearby active drivers.", status: 201 }
    ],
    codeFiles: [
      {
        path: "lib/main.dart",
        language: "dart",
        framework: "Flutter",
        code: `import 'package:flutter/material.dart';

void main() => runApp(const UrbanRideApp());

class UrbanRideApp extends StatelessWidget {
  const UrbanRideApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFF0F172A),
        appBar: AppBar(title: const Text('UrbanRide 🚕')),
        body: const Center(child: Text('Taxi Booking App', style: TextStyle(color: Colors.white))),
      ),
    );
  }
}`
      }
    ],
    issues: []
  }
];

// Helper to generate dynamic application data for custom user prompts
export function generateAppFromPrompt(userPrompt) {
  const promptLower = userPrompt.toLowerCase();
  
  if (promptLower.includes("food") || promptLower.includes("delivery") || promptLower.includes("restaurant") || promptLower.includes("eat")) {
    return { ...PRESET_PROJECTS[0], id: `proj_${Date.now()}`, prompt: userPrompt };
  }
  if (promptLower.includes("shop") || promptLower.includes("cloth") || promptLower.includes("store") || promptLower.includes("e-commerce") || promptLower.includes("ecommerce")) {
    return { ...PRESET_PROJECTS[1], id: `proj_${Date.now()}`, prompt: userPrompt };
  }
  if (promptLower.includes("fit") || promptLower.includes("health") || promptLower.includes("workout") || promptLower.includes("gym")) {
    return { ...PRESET_PROJECTS[2], id: `proj_${Date.now()}`, prompt: userPrompt };
  }
  if (promptLower.includes("taxi") || promptLower.includes("cab") || promptLower.includes("ride") || promptLower.includes("driver")) {
    return { ...PRESET_PROJECTS[3], id: `proj_${Date.now()}`, prompt: userPrompt };
  }

  // Generic custom app generator
  const cleanTitle = userPrompt.split(" ").slice(0, 3).join(" ").replace(/[^a-zA-Z0-9 ]/g, "");
  const appName = cleanTitle ? cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1) + " App" : "Custom AI App";

  return {
    id: `proj_${Date.now()}`,
    name: appName,
    category: "Custom AI Generation",
    badge: "AI Custom",
    description: `Tailor-made cross-platform application generated specifically for: "${userPrompt}"`,
    icon: "Sparkles",
    prompt: userPrompt,
    architecture: {
      frontend: "Flutter (Dart) & React Native (TypeScript)",
      backend: "Node.js (Express) Microservices",
      database: "PostgreSQL 16 + Redis",
      auth: "Supabase Auth / Firebase JWT",
      payments: "Stripe Payment Gateway",
      storage: "AWS S3 Cloud Storage"
    },
    screens: [
      { id: "home", title: "Main Dashboard", icon: "Home" },
      { id: "explore", title: "Feature Overview", icon: "Compass" },
      { id: "action", title: "Core Workspace", icon: "Layers" },
      { id: "activity", title: "Activity Log", icon: "Activity" },
      { id: "profile", title: "User Profile", icon: "User" }
    ],
    sampleData: {
      customMetrics: [
        { label: "Active Sessions", value: "1,420", change: "+12.4%" },
        { label: "AI Efficiency", value: "99.4%", change: "+3.1%" },
        { label: "Response Latency", value: "42ms", change: "-8.5%" }
      ]
    },
    databaseSchema: {
      engine: "PostgreSQL 16",
      tables: [
        {
          name: "app_entities",
          fields: [
            { name: "id", type: "UUID", pk: true },
            { name: "title", type: "VARCHAR(255)" },
            { name: "data_payload", type: "JSONB" },
            { name: "created_at", type: "TIMESTAMPTZ" }
          ]
        }
      ]
    },
    apiEndpoints: [
      { method: "GET", path: "/api/v1/entities", desc: "Fetch generated core data entities.", status: 200 },
      { method: "POST", path: "/api/v1/entities/create", desc: "Create a new custom record.", status: 201 }
    ],
    codeFiles: [
      {
        path: "lib/main.dart",
        language: "dart",
        framework: "Flutter",
        code: `import 'package:flutter/material.dart';

void main() => runApp(const CustomAIApp());

class CustomAIApp extends StatelessWidget {
  const CustomAIApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '${appName}',
      theme: ThemeData.dark(),
      home: Scaffold(
        appBar: AppBar(title: const Text('${appName}')),
        body: const Center(child: Text('Generated from prompt: "${userPrompt}"')),
      ),
    );
  }
}`
      },
      {
        path: "src/App.tsx",
        language: "typescript",
        framework: "React Native",
        code: `import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#090D16', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#F8FAFC', fontSize: 20, fontWeight: 'bold' }}>${appName}</Text>
      <Text style={{ color: '#94A3B8', marginTop: 8 }}>Prompt: ${userPrompt}</Text>
    </View>
  );
}`
      }
    ],
    issues: []
  };
}
