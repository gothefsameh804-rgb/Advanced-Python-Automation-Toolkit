import requests
import json
import logging

# ============================================================
# DEVELOPER: YOUSSEF A.
# PROJECT: HIGH-PERFORMANCE DATA AUTOMATION ENGINE
# VERSION: 1.0.0
# ============================================================

class DataAutomationSystem:
    def __init__(self, endpoint_url):
        self.endpoint_url = endpoint_url
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s'
        )

    def execute_data_retrieval(self):
        logging.info(f"Connecting to: {self.endpoint_url}")
        try:
            response = requests.get(self.endpoint_url, timeout=15)
            response.raise_for_status()
            logging.info("Request successful.")
            return response.json()
        except requests.exceptions.RequestException as e:
            logging.error(f"Execution Error: {e}")
            return None

    def process_and_export(self, data, filename="structured_output.json"):
        if data:
            try:
                with open(filename, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=4, ensure_ascii=False)
                logging.info(f"Data exported successfully to {filename}")
            except IOError as e:
                logging.error(f"I/O Error: {e}")

if __name__ == "__main__":
    # Test using GitHub Public API
    TARGET_ENDPOINT = "https://api.github.com/users/youssef-a"
    
    SYSTEM = DataAutomationSystem(TARGET_ENDPOINT)
    RETRIEVED_DATA = SYSTEM.execute_data_retrieval()
    SYSTEM.process_and_export(RETRIEVED_DATA)
          
