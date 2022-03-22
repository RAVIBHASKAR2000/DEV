from selenium import webdriver
option = webdriver.ChromeOptions();
option.add_argument("-incognito");
browser= webdriver.Chrome(executable_path="C:\\chromedriver.exe",options=option);
browser.get("https://docs.google.com/forms/d/e/1FAIpQLSe_SEZL1L92KGCSMRoSYv-njjh340kNcFN1cHLojZSlIl_71A/viewform?usp=sf_link");

textbox=browser.find_element_by_class_name("quantumWizTextinputPaperinputInput exportInput");
radiobutton=browser.find_element_by_class_name("appsMaterialWizToggleRadiogroupOffRadio exportOuterCircle");
textbox[0].send_keys("RAvi Bhaskar");
radiobutton[0].click();
