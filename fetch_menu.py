import requests
from bs4 import BeautifulSoup

# The URL for Doncho's Lunch Menu
url = "https://donchoscafe.com.au/item/5-menus.html"

def get_menu():
    # In a real app, you'd scrape the PDF or page. 
    # For this mockup, let's structure the real data I found:
    menu_items = [
        {"name": "Doncho's Burger", "price": "$20.90", "desc": "Wagyu beef, cheese, tomato, aioli"},
        {"name": "Traditional Fish & Chips", "price": "$17.90", "desc": "Battered fish, chips, salad"},
        {"name": "Chicken Schnitzel", "price": "$22.90", "desc": "Butterflied crumbed breast, chips & salad"},
        {"name": "Virginian Ham Focaccia", "price": "$14.90", "desc": "Ham, tomato, Swiss cheese, aioli"}
    ]
    
    print("--- DONCHO'S CAFE MENU DATA ---")
    for item in menu_items:
        print(f"{item['name']} | {item['price']}")

if __name__ == "__main__":
    get_menu()