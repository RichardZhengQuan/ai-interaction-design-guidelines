"""Create original UI guideline figures. These are conceptual diagrams, not app screenshots."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json

ROOT = Path(__file__).parent
OUT = ROOT / 'dist' / 'assets' / 'zh'
OUT.mkdir(parents=True, exist_ok=True)
TRANSLATIONS = json.loads((ROOT / 'figure-translations.zh.json').read_text())
S = 2
W, H = 1440, 860
BG = '#f5f5f7'
INK = '#1d1d1f'
MUTED = '#6e6e73'
LINE = '#d6d6dc'
BLUE = '#007aff'
PALE = '#eaf3ff'
WHITE = '#ffffff'
GREEN = '#24834b'
FONT = '/System/Library/Fonts/STHeiti Light.ttc'
BOLD = '/System/Library/Fonts/STHeiti Medium.ttc'

def new():
    global im, d
    im = Image.new('RGB', (W*S,H*S), BG)
    d = ImageDraw.Draw(im)

def font(size=22, bold=False):
    return ImageFont.truetype(BOLD if bold else FONT, int(size*S))

def text(x,y,t,size=22,color=INK,bold=False,anchor=None):
    t = TRANSLATIONS.get(t, t)
    d.text((x*S,y*S),t,font=font(size,bold),fill=color,anchor=anchor)

def rect(x,y,w,h,fill=WHITE,outline=None,r=16,width=1):
    d.rounded_rectangle((x*S,y*S,(x+w)*S,(y+h)*S),radius=r*S,fill=fill,outline=outline,width=width*S)

def line(points,color=LINE,width=2):
    d.line([(x*S,y*S) for x,y in points],fill=color,width=width*S)

def circle(x,y,r=5,fill=BLUE):
    d.ellipse(((x-r)*S,(y-r)*S,(x+r)*S,(y+r)*S),fill=fill)

def center(x,y,t,size=22,color=INK,bold=False):
    text(x,y,t,size,color,bold,'mt')

def button(x,y,w,t,primary=False):
    rect(x,y,w,44,BLUE if primary else '#f0f0f3',r=11)
    center(x+w/2,y+10,t,18,WHITE if primary else INK,True)

def note(x,y,t,size=21):
    text(x,y,t,size,MUTED)

def caption(t):
    center(W/2,790,t,24,MUTED)

def phone(x,y,w=278,h=560,title='Dinner with Alex',status='Planning'):
    rect(x,y,w,h,WHITE,'#929298',r=39,width=3)
    rect(x+w/2-38,y+14,76,8,INK,r=4)
    text(x+22,y+45,'9:41',14,INK,True)
    line([(x+18,y+78),(x+w-18,y+78)])
    text(x+22,y+94,title,20,INK,True)
    text(x+22,y+124,status,15,MUTED)
    line([(x+18,y+154),(x+w-18,y+154)])
    rect(x+17,y+h-81,w-34,47,'#f1f1f4',r=14)
    text(x+31,y+h-66,'Ask or change something',14,MUTED)
    rect(x+w/2-40,y+h-18,80,4,INK,r=2)

def window(x,y,w,h,title):
    rect(x,y,w,h,WHITE,'#a4a4aa',r=17,width=2)
    for i,c in enumerate(['#ff6058','#ffbd2e','#28c840']):circle(x+24+i*20,y+23,5,c)
    center(x+w/2,y+13,title,16,MUTED)
    line([(x,y+46),(x+w,y+46)])

def inputbar(x,y,w,t='Ask or change something'):
    rect(x,y,w,52,'#f0f0f3',r=15)
    text(x+18,y+16,t,17,MUTED)

def arrow(x1,y1,x2,y2):
    line([(x1,y1),(x2,y2)],BLUE,3)
    line([(x2-12,y2-9),(x2,y2),(x2-12,y2+9)],BLUE,3)

def callout(points,x,y,t):
    circle(*points[0],4,BLUE)
    line(points,'#8b8b91',2)
    text(x,y,t,21,INK)

def calendar(x,y,w=225):
    text(x,y,'NEXT WEEK',13,MUTED,True)
    cols=['一','二','三','四','五','六','日']
    step=w/7
    for i,c in enumerate(cols):center(x+step*(i+.5),y+29,c,13,MUTED)
    for i in range(14):
        cx=x+step*(i%7+.5); cy=y+71+(i//7)*36
        if i==3:rect(cx-14,cy-5,28,28,BLUE,r=14)
        center(cx,cy,str(i+12),14,WHITE if i==3 else INK,i==3)

def result(x,y,w,action='Review'):
    rect(x,y,w,104,'#ecedee',r=15)
    # A simple original restaurant interior drawing.
    for i in range(3):
        rect(x+20+i*(w-40)/3,y+16,(w-70)/3,38,'#c8d6ca',r=6)
    line([(x+18,y+76),(x+w-18,y+76)],'#9aada0',2)
    for i in range(2):
        cx=x+w*(.30+.4*i)
        rect(cx-23,y+65,46,10,'#9da99d',r=3)
        line([(cx,y+75),(cx,y+97)],'#9da99d',2)
    text(x,y+124,'The Garden Table',20,INK,True)
    text(x,y+153,'Thursday, 7 PM',18,INK)
    text(x,y+183,'For 2 people',16,MUTED)
    button(x,y+220,w,action,True)

def save(name):
    im.resize((W,H),Image.Resampling.LANCZOS).save(OUT/name)

# 1. Device and interaction method.
new()
center(290,42,'COMPACT DISPLAY',17,MUTED,True)
phone(152,96,276,567)
calendar(176,277,228)
button(176,510,228,'Choose time',True)
center(763,42,'LARGER DISPLAY',17,MUTED,True)
window(500,178,535,376,'Dinner with Alex')
text(526,250,'Choose a time',25,INK,True)
calendar(526,303,249)
line([(792,244),(792,479)])
text(814,272,'Thursday',20,INK,True)
text(814,304,'7 PM',19)
text(814,343,'2 people',17,MUTED)
button(814,400,191,'Continue',True)
inputbar(523,481,489)
center(1214,42,'AUDIO INTERACTION',17,MUTED,True)
rect(1090,263,258,206,WHITE,LINE,r=28)
for i,h in enumerate([12,25,42,60,34,22,46,62,30,14]):
    rect(1136+i*16,318-h/2,5,h,BLUE,r=3)
center(1219,373,'Thursday at 7?',22,INK,True)
center(1219,410,'Short spoken confirmation',15,MUTED)
caption('Keep the task consistent. Adapt the interaction to the available surface.')
save('01-context.png')

# 2. Anatomy of one focused task.
new()
phone(513,57,348,682,status='Choose a time')
calendar(538,249,297)
rect(538,422,298,90,PALE,r=15)
text(555,440,'Thursday, 7 PM',22,INK,True)
text(555,474,'Works with both calendars',16,MUTED)
button(538,539,298,'Find a restaurant',True)
callout([(531,169),(384,169),(384,119)],113,93,'Current task')
callout([(536,360),(356,360)],87,344,'Task-specific content')
callout([(836,560),(1087,560)],1102,544,'One next action')
callout([(836,680),(1016,680),(1016,709)],1032,700,'Persistent assistant input')
rect(94,566,292,99,WHITE,LINE,r=16)
text(112,583,'Other tasks',17,MUTED,True)
text(112,616,'Price watch  ·  Running',17)
caption('Organize the foreground around one intention, while other work remains accessible.')
save('02-focus.png')

# 3. Background voice does not occupy the foreground.
new()
window(141,88,1158,609,'Your current activity')
rect(141,134,192,561,'#eeeff2',r=0)
text(169,170,'Mail',23,INK,True)
text(169,220,'Inbox',18,MUTED)
text(169,260,'Drafts',18,BLUE,True)
text(169,300,'Sent',18,MUTED)
text(382,176,'Project proposal',31,INK,True)
text(382,232,'To: Project team',18,MUTED)
line([(382,276),(1237,276)])
text(382,307,'Hi team,',21)
text(382,354,'Here is the proposal for next week.',21)
for i,w in enumerate([580,710,655,430]):rect(382,413+i*34,w,7,'#d8d9df',r=3)
rect(851,574,416,88,WHITE,'#c6c7ce',r=23,width=2)
for i,h in enumerate([10,23,35,20,12]):rect(877+i*12,610-h/2,4,h,BLUE,r=2)
text(949,591,'Listening',19,INK,True)
text(949,620,'Remind me at 7',16,MUTED)
button(1167,596,80,'Stop')
callout([(1238,576),(1325,576),(1325,484)],1063,447,'Visible status and stop control')
caption('Voice can remain available while the user continues their current activity.')
save('03-voice.png')

# 4. One primary result with progressively revealed detail.
new()
phone(214,50,335,685,status='Recommendation ready')
result(237,239,289,'Review booking')
line([(237,543),(526,543)])
text(244,558,'Why this recommendation?',16)
text(500,558,'+',19,MUTED)
line([(237,590),(526,590)])
text(244,604,'Other options',16)
text(500,604,'+',19,MUTED)
callout([(524,338),(677,338)],695,320,'One primary result')
callout([(524,491),(677,491)],695,473,'A clear next action')
callout([(524,609),(677,609)],695,591,'Details available on request')
rect(945,292,340,175,WHITE,LINE,r=18)
text(969,316,'When comparison is the task',21,INK,True)
text(969,359,'Show the relevant alternatives',17,MUTED)
text(969,390,'together in one focused view.',17,MUTED)
caption('Make the outcome easy to understand, with enough depth to support a decision.')
save('04-outcome.png')

# 5. Generate task content; keep the shell stable.
new()
xs=[116,581,1046]
titles=['Schedule','Compare options','Edit image']
for x,t in zip(xs,titles):
    phone(x,91,280,592,title=t,status='Task view')
    rect(x+16,175,248,65,None,'#b1d4ff',r=10,width=2)
    rect(x+16,590,248,54,None,'#b1d4ff',r=14,width=2)
calendar(138,291,237)
button(138,488,236,'Confirm time',True)
for i,t in enumerate(['The Garden Table','Corner Kitchen','Market Bistro']):
    rect(603,286+i*81,236,68,PALE if i==0 else '#f2f2f5',r=12)
    text(619,301+i*81,t,17,INK,i==0)
    text(619,329+i*81,'7 PM  ·  2 people',14,MUTED)
button(603,548,236,'Choose restaurant',True)
rect(1068,283,236,206,'#dce7db',r=8)
line([(1080,461),(1140,372),(1203,426),(1260,346),(1290,457)],'#8fae90',5)
rect(1090,302,190,165,None,WHITE,r=0,width=3)
button(1068,520,112,'Crop')
button(1192,520,112,'Adjust')
center(720,731,'Same navigation and assistant controls; content adapts to the task.',21,MUTED)
save('05-generated-ui.png')

# 6. Pending action, accurate status, control.
new()
window(170,88,1100,617,'Dinner with Alex')
rect(203,163,232,501,'#f2f2f5',r=14)
text(227,193,'TASK STATUS',15,MUTED,True)
states=[('1','Find options',GREEN),('2','Choose a table',GREEN),('3','Needs approval',BLUE),('4','Book reservation','#a2a2aa')]
for i,(n,t,c) in enumerate(states):
    yy=263+i*91
    if i==2:rect(216,yy-12,206,65,PALE,r=10)
    circle(240,yy+13,12,c)
    center(240,yy+3,n,14,WHITE,True)
    text(265,yy+3,t,17,c,i==2)
text(478,182,'Review before booking',30,INK,True)
text(478,231,'The reservation has not been made.',20,MUTED)
rect(478,291,748,182,'#f7f7f9',LINE,r=16)
text(503,315,'The Garden Table',26,INK,True)
text(503,363,'Thursday, 7 PM  ·  2 people',22)
text(503,412,'Reservation under your name',18,MUTED)
button(478,511,124,'Edit')
button(618,511,124,'Stop')
button(1001,511,225,'Approve booking',True)
inputbar(478,591,748)
caption('Differentiate a proposal, work in progress, a request for approval, and completion.')
save('06-control.png')

# 7. Preserve task state and unfinished input.
new()
phone(76,80,311,630,status='Needs approval')
result(98,260,267,'Review booking')
rect(98,628,267,42,'#eef4ff',r=11)
text(112,642,'Make it 7:30 instead…',17,INK)
arrow(427,368,532,368)
text(425,398,'Continue',16,BLUE)
window(572,169,803,463,'Dinner with Alex')
text(603,239,'Needs approval',19,BLUE,True)
text(603,293,'The Garden Table',28,INK,True)
text(603,343,'Thursday, 7 PM',23)
text(603,384,'2 people  ·  Same selected restaurant',18,MUTED)
button(603,451,124,'Edit')
button(1084,451,261,'Review booking',True)
inputbar(603,543,742,'Make it 7:30 instead…')
callout([(1109,251),(1109,110)],895,71,'Task status is preserved')
callout([(988,352),(1267,352),(1267,392)],1056,404,'Selection stays the same')
caption('Carry decisions, progress, and unfinished input across devices and interaction methods.')
save('07-continuity.png')

# A compact overview is useful for checking the consistency of the set.
thumbs=[]
for p in sorted(OUT.glob('0*.png')):
    pic=Image.open(p).resize((480,287),Image.Resampling.LANCZOS)
    thumbs.append((p.name,pic))
sheet=Image.new('RGB',(1440,1010),'white')
sd=ImageDraw.Draw(sheet)
for i,(name,pic) in enumerate(thumbs):
    x=(i%3)*480; y=(i//3)*335
    sheet.paste(pic,(x,y))
    sd.text((x+12,y+295),name,font=ImageFont.truetype(FONT,17),fill=INK)
sheet.save(OUT/'overview.png')
print(f'Created {len(thumbs)} original UI figures in {OUT}')
