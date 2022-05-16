# referenced from https://towardsdatascience.com/image-analysis-for-beginners-creating-a-motion-detector-with-opencv-4ca6faba4b42\
# 3. Set previous frame and continue if there is None
if (previous_frame is None):
  # First frame; there is no previous one yet
  previous_frame = prepared_frame
  continue

# calculate difference and update previous frame
diff_frame = cv2.absdiff(src1=previous_frame, src2=prepared_frame)
previous_frame = prepared_frame

# 4. Dilute the image a bit to make differences more seeable; more suitable for contour detection
kernel = np.ones((5, 5))
diff_frame = cv2.dilate(diff_frame, kernel, 1)

# 5. Only take different areas that are different enough (>20 / 255)
thresh_frame = cv2.threshold(
    src=diff_frame, thresh=20, maxval=255, type=cv2.THRESH_BINARY)[1]
