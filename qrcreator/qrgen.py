import io
import pyqrcode
from base64 import b64encode

def getqr(data):
    img = pyqrcode.create(data)
    buffers = io.BytesIO()
    img.png(buffers, scale=10)
    
    encoded = b64encode(buffers.getvalue()).decode("ascii")
    return "data:image/png;base64,"+encoded