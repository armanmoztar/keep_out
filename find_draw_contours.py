contours, _ = cv2.findContours(
    image=thresh_frame, mode=cv2.RETR_EXTERNAL, method=cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(image=img_rgb, contours=contours, contourIdx=-1,
                 color=(0, 255, 0), thickness=2, lineType=cv2.LINE_AA)
