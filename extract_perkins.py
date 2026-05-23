import sys
from pypdf import PdfReader

def extract_image_raw():
    pdf_path = "assets/catalogs/powerloadbd-generator-catalog.pdf"
    out_path = "assets/images/products/generator-perkins-spec.jpg"
    
    reader = PdfReader(pdf_path)
    page = reader.pages[1]  # second page
    
    if '/XObject' in page['/Resources']:
        xObject = page['/Resources']['/XObject'].get_object()
        for obj in xObject:
            if xObject[obj]['/Subtype'] == '/Image':
                # check if it is a jpeg
                if '/Filter' in xObject[obj]:
                    if xObject[obj]['/Filter'] == '/DCTDecode':
                        data = xObject[obj].get_data()
                        with open(out_path, "wb") as fp:
                            fp.write(data)
                        print("Successfully extracted raw JPEG image to", out_path)
                        return
                else:
                    # it might be raw, just save it
                    data = xObject[obj].get_data()
                    with open(out_path, "wb") as fp:
                        fp.write(data)
                    print("Extracted raw image to", out_path)
                    return
    print("No images found on page 2")

if __name__ == "__main__":
    extract_image_raw()
