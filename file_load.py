import cv2

img = cv2.imread(filename="test1.mp4")
cv2.imshow('image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
