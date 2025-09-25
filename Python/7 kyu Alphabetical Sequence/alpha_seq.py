# In this kata you will be given a random string of letters and tasked with returning
# them as a string of comma-separated sequences sorted alphabetically,
# with each sequence starting with an uppercase character followed by n-1 
# lowercase characters, where n is the letter's alphabet position 1-26.
# Example
# "ZpglnRxqenU" -> 
# "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,
# Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"

# Solution

def alpha_seq(strng):

    letras = sorted(strng.lower())  
    
    palabras = []
    for letra in letras:
        posicion = ord(letra) - ord('a') + 1  
        palabra = letra.upper() + letra.lower() * (posicion - 1)  
        palabras.append(palabra)  
    
    resultado = ','.join(palabras)
    
    return resultado
