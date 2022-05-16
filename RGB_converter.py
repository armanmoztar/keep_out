# referenced from https://towardsdatascience.com/image-analysis-for-beginners-creating-a-motion-detector-with-opencv-4ca6faba4b42
def motion_detector():
  
  frame_count = 0
  previous_frame = None
  
  while True:
    frame_count += 1

    # 1. Load image; convert to RGB
    img_brg = np.array(ImageGrab.grab())
    img_rgb = cv2.cvtColor(src=img_brg, code=cv2.COLOR_BGR2RGB)

    if ((frame_count % 2) == 0):

    # 2. Prepare image; grayscale and blur
    prepared_frame = cv2.cvtColor(img_rgb, cv2.COLOR_BGR2GRAY)
    prepared_frame = cv2.GaussianBlur(src=prepared_frame, ksize=(5,5), sigmaX=0)