# Troubleshooting Guide

## ✅ CSS Syntax Error Fixed

### Issue
```
SyntaxError: Unknown word at line 414 in Projects.module.css
```

### Cause
Duplicate gradient definition in the shimmer effect code.

### Solution
✅ **Fixed** - Removed duplicate code in `Projects.module.css`

---

## 🚀 Running the Application

### If Port 3000 is Already in Use

**Option 1: Use Different Port**
When prompted, type `Y` to run on a different port (e.g., 3001)

**Option 2: Stop Existing Server**
1. Find the process: `netstat -ano | findstr :3000`
2. Kill it: `taskkill /PID <process_id> /F`

**Option 3: Use the Running Server**
If it's already running, just open `http://localhost:3000` in your browser

---

## 🔍 Common Issues & Solutions

### 1. Module Not Found Errors

**Error:**
```
Module not found: Can't resolve './hooks/useMagneticEffect'
```

**Solution:**
Ensure all hook files exist in `src/hooks/`:
- `useMagneticEffect.js`
- `useRippleEffect.js`
- `useCardTilt.js`

### 2. CSS Module Not Loading

**Error:**
```
Module not found: Can't resolve './PremiumCursor.module.css'
```

**Solution:**
Check that all `.module.css` files exist in their respective folders

### 3. Import Path Issues

**Error:**
```
Module not found: Error: Can't resolve '../../hooks/useCardTilt'
```

**Solution:**
Verify import paths are correct relative to the file location

### 4. Hooks Rules Violation

**Error:**
```
React Hook "useMagneticEffect" is called conditionally
```

**Solution:**
Ensure hooks are called at the top level, not inside conditions

### 5. Cursor Not Appearing

**Symptoms:**
- Custom cursor doesn't show up
- Default cursor still visible

**Solutions:**
1. Check if you're on desktop (not mobile/tablet)
2. Clear browser cache: `Ctrl + Shift + Delete`
3. Check browser console for errors
4. Verify `PremiumCursor` component is rendered in App.js

### 6. Ripple Effect Not Working

**Symptoms:**
- No ripple when clicking buttons

**Solutions:**
1. Check that `ripple.css` is imported in `App.js`
2. Verify buttons have `position: relative` and `overflow: hidden`
3. Check that `useRippleEffect` hook is called correctly

### 7. Magnetic Effect Not Working

**Symptoms:**
- Buttons don't attract cursor

**Solutions:**
1. Ensure you're on desktop (hover device)
2. Check that `useMagneticEffect` hook is applied to button ref
3. Verify button has `data-cursor="pointer"` attribute

### 8. Performance Issues

**Symptoms:**
- Laggy animations
- High CPU usage

**Solutions:**
1. Check Chrome DevTools Performance tab
2. Reduce animation complexity in CSS
3. Verify GPU acceleration is working (check will-change properties)
4. Test in different browser

### 9. TypeScript Errors (if using TS)

**Error:**
```
Could not find a declaration file for module './hooks/useMagneticEffect'
```

**Solution:**
Add type declarations or convert hooks to TypeScript

### 10. Build Errors

**Error:**
```
Failed to compile
```

**Solutions:**
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```

2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

3. Delete build folder:
   ```bash
   rm -rf build
   ```

---

## 🧹 Complete Reset

If nothing works, try a complete reset:

```bash
# Stop the server (Ctrl + C)

# Remove node_modules and build
rm -rf node_modules
rm -rf build
rm -rf .cache

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install

# Start fresh
npm start
```

---

## 📋 Verification Checklist

After fixing issues, verify:

- [ ] Server starts without errors
- [ ] No console errors in browser
- [ ] Custom cursor appears on desktop
- [ ] Buttons have magnetic effect
- [ ] Ripple appears on click
- [ ] Project cards tilt on hover
- [ ] Images zoom on hover
- [ ] Scroll progress bar visible
- [ ] Scroll to top button works
- [ ] Navigation underlines animate
- [ ] Responsive on mobile
- [ ] Theme switching works
- [ ] Keyboard navigation works

---

## 🌐 Browser-Specific Issues

### Chrome
- Clear cache: `Ctrl + Shift + Delete`
- Disable extensions that might interfere
- Check for mixed content warnings

### Firefox
- Clear cache: `Ctrl + Shift + Delete`
- Check if backdrop-filter is enabled
- Verify CSS Grid support

### Safari
- Clear cache: `Cmd + Option + E`
- Check for webkit-specific issues
- Verify backdrop-filter support

### Edge
- Same as Chrome (Chromium-based)
- Check for Windows-specific issues

---

## 🔧 Development Tools

### Check What's Running
```bash
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

### Kill Process
```bash
# Windows
taskkill /PID <process_id> /F

# Linux/Mac
kill -9 <process_id>
```

### Verify File Structure
```bash
# Check hooks folder
ls src/hooks

# Check styles folder
ls src/styles

# Check UI components
ls src/Components/UI
```

---

## 📞 Still Having Issues?

1. **Check Console:** Open browser DevTools (F12) and check Console tab
2. **Check Network:** Look for failed resource loads in Network tab
3. **Check Elements:** Verify elements are being rendered
4. **Check CSS:** Use Inspect Element to see if styles are applied

---

## ✅ Quick Fixes

### Fast Reset
```bash
# Restart development server
Ctrl + C
npm start
```

### Clear Everything
```bash
# Clear all caches and restart
npm cache clean --force
rm -rf node_modules build
npm install
npm start
```

### Emergency Rollback
If new features break everything:
1. Use git to revert changes
2. Or manually remove new imports from App.js
3. Comment out new components

---

## 🎯 Current Status

✅ **CSS Syntax Error:** FIXED  
✅ **All Files Created:** VERIFIED  
✅ **Imports Updated:** VERIFIED  

**Next Step:** Refresh your browser or restart the dev server to see the changes!

---

*Last Updated: Now*
